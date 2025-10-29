// config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_ACCESS_SECRET"),
          },
          region: env("AWS_REGION"),
        },
        params: {
          Bucket: env("AWS_BUCKET"),
          ACL: null,
          signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
      breakpoints: {
        thumbnail: 300,
        small: 600,
        medium: 1200,
        large: 1600,
      },
    },
  },
});
