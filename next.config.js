// repository_name はそれぞれの値に置き換える
module.exports = {
  basePath: process.env.GITHUB_ACTIONS && "/tools",
  trailingSlash: true,
};
