import {
  S3Client,
  // This command supersedes the ListObjectsCommand and is the recommended way to list objects.
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";

// intialise client using IAM
const client = new S3Client({
	region: import.meta.env.DB_REGION,
	credentials:{
		accessKeyId: import.meta.env.DB_ACCESS_KEY,
		secretAccessKey: import.meta.env.DB_SECRET_ACCESS_KEY
	}
});

export const listBucketItems = async (bucketName: string) => {
  const command = new ListObjectsV2Command({
    Bucket: bucketName,
    // The default and maximum number of keys returned is 1000. This limits it to
    // one for demonstration purposes.
    MaxKeys: 1,
  });

  try {
    let isTruncated = true;
    let contents = [];

    while (isTruncated) {
      const { Contents, IsTruncated, NextContinuationToken } = await client.send(command);
      const contentsList = Contents.map((c) => `${c.Key}`);
      contents.push(contentsList);
      isTruncated = IsTruncated;
      command.input.ContinuationToken = NextContinuationToken;
    }
    return contents
  } catch (err) {
    console.error(err);
  }
};

const createImgUrl = (key: string) => {
  return `https://${import.meta.env.DB_BUCKET}.s3.${import.meta.env.DB_REGION}.amazonaws.com/${key}`
}

export interface FolderData {
  folders: string[]
  [key: string]: string[]
}

export const getS3Data = (list: string[]) => {
  let data: FolderData = {
    folders: []
    // add folders as dynamic keys
  };

  list.forEach((item) => {
    const itemArr = item[0].split('/');  // split into [folder, file_name]

    if (itemArr[1] !== '') {
      // files
      if (data[itemArr[0]] === undefined) {
        data[itemArr[0]] = [createImgUrl(item)];
      } else {
        data[itemArr[0]].push(createImgUrl(item));
      }
    } else if (itemArr[1] === '') {
      // folder
      data.folders.push(itemArr[0]);
    }
  });

  return data
};