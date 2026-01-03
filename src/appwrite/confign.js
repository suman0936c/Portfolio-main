// import conf from '../conf/conf.js';
// import { Client, ID, TablesDB, Storage, Query } from "appwrite";

// export class Service {
//     client = new Client();
//     tables;
//     bucket;
    
//     constructor() {
//         this.client
//             .setEndpoint(conf.appwriteUrl)       // e.g. https://cloud.appwrite.io/v1
//             .setProject(conf.appwriteProjectId); // your Project ID

//         this.tables = new TablesDB(this.client);
//         this.bucket = new Storage(this.client);
//     }

//     async createPost({ title, slug, content, featuredImage, status, userId }) {
//         try {
//             return await this.tables.createRow(
//                 conf.appwriteDatabaseId,  // Database ID
//                 conf.appwriteCollectionId,     // Table ID (instead of collection)
//                 slug,                     // Row ID (you can also use ID.unique())
//                 {
//                     title,
//                     content,
//                     featuredImage,
//                     status,
//                     userId,
//                 }
//             );
//         } catch (error) {
//             console.log("Appwrite service :: createPost :: error", error);
//         }
//     }

//     // Update a post (row)
//     async updatePost(slug, { title, content, featuredImage, status }) {
//         try {
//             return await this.tables.updateRow(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug,
//                 {
//                     title,
//                     content,
//                     featuredImage,
//                     status,
//                 }
//             );
//         } catch (error) {
//             console.log("Appwrite service :: updatePost :: error", error);
//         }
//     }

//     // Delete a post (row)
//     async deletePost(slug) {
//         try {
//             await this.tables.deleteRow(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug
//             );
//             return true;
//         } catch (error) {
//             console.log("Appwrite service :: deletePost :: error", error);
//             return false;
//         }
//     }

//     // Get one post by ID
//     async getPost(slug) {
//         try {
//             return await this.tables.getRow(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug
//             );
//         } catch (error) {
//             console.log("Appwrite service :: getPost :: error", error);
//             return false;
//         }
//     }

//     // Get all posts
//     async getPosts(queries = [Query.equal("status", "active")]) {
//         try {
//             return await this.tables.listRows(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 queries
//             );
//         } catch (error) {
//             console.log("Appwrite service :: getPosts :: error", error);
//             return false;
//         }
//     }

//     // File upload service
//     async uploadFile(file) {
//         try {
//             return await this.bucket.createFile(
//                 conf.appwriteBucketId,
//                 ID.unique(),
//                 file
//             );
//         } catch (error) {
//             console.log("Appwrite service :: uploadFile :: error", error);
//             return false;
//         }
//     }

//     async deleteFile(fileId) {
//         try {
//             await this.bucket.deleteFile(
//                 conf.appwriteBucketId,
//                 fileId
//             );
//             return true;
//         } catch (error) {
//             console.log("Appwrite service :: deleteFile :: error", error);
//             return false;
//         }
//     }

//     getFilePreview(fileId) {
//         return this.bucket.getFilePreview(
//             conf.appwriteBucketId,
//             fileId
//         );
//     }
// }

// const service = new Service();
// export default service;
