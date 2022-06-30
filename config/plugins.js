module.exports = ({env}) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_kEY'),
      api_secret: env('CLOUDINARY_SECRET')
    },
    actionOptions: {
      upload:{},
      delete:{}
    }
  }
})
