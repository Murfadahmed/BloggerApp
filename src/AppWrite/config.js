// import conf from "../Conf/conf.js";

// import { Client, ID, Databases, Storage, Query } from "appwrite";

// export class Service {
//   client = new Client();
//   databases;
//   bucket;

//   constructor() {
//     this.client
//       .setEndpoint(conf.appwriteUrl)
//       .setProject(conf.appwriteProjectId);
//     this.databases = new Databases(this.client);
//     this.bucket = new Storage(this.client);
//   }
//   //post service
//   async createPost({title, slug, content, featuredImage, status, userId}){
//     try {
//         return await this.databases.createDocument(
//             conf.appwriteDataBaseId,
//             conf.appwriteCollectionId,
//             slug,
//             {
//                 title,
//                 content,
//                 featuredImage,
//                 status,
//                 userId,
//             }
//         )
//     } catch (error) {
//         console.log("Appwrite serive :: createPost 33:: error", error);
//     }
// }
//   async updatePost(slug, { title, content, featuredImage, status, userId }) {
//     try {
//       return await this.databases.updateDocument(
//         conf.appwriteDataBaseId,
//         conf.appwriteCollectionId,
//         slug,
//         {
//           title,
//           content,
//           featuredImage,
//           status,
//         }
//       );
//     } catch (error) {
//       console.log("Appwrite service :: Updated post  error", error);
//     }
//   }
//   async deletePost(slug) {
//     try {
//       await this.databases.deleteDocument(
//         conf.appwriteDataBaseId,
//         conf.appwriteCollectionId,
//         slug
//       );
//       return true;
//     } catch (error) {
//       console.log("appwrite service :: deleteing post ", error);
//       return false;
//     }
//   }
//   async getPost(slug) {
//     try {
//       return await this.databases.getDocument(
//         conf.appwriteDataBaseId,
//         conf.appwriteCollectionId,
//         slug
//       );
//     } catch (error) {
//       console.log("error in app write get post service", error);
//       return false;
//     }
//   }
//   async getPosts(queries = [Query.equal("status", "active")]) {
//     try {
//       return await this.databases.listDocuments(
//         conf.appwriteDataBaseId,
//         conf.appwriteCollectionId,
//         queries
//       );
//     } catch (error) {
//       console.log("error in appwrite to get all post ", error);
//     }
//   }

//   //file service
//   async uploadFile(file) {
//     try {
//       return await this.bucket.createFile(
//         conf.appwriteBucketId,
//         ID.unique(),
//         file
//       );
//     } catch (error) {
//       console.log("error in uploading file appwrite::", error);
//       return false;
//     }
//   }
//   async deleteFile(fileId) {
//     try {
//       await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
//       return true;
//     } catch (error) {
//       console.log("errror in deleting file in appwrite ::", error);
//     }
//   }
//   async getfilePreview(fileId) {
//     try {
//       return await this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
//     } catch (error) {
//       console.log("error in get file preview", error);
//     }
//   }
// }

// const service = new Service();
// export default service;

import conf from "../Conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite serive :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();
export default service;
