let appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db=
 {
        uri:'mongodb+srv://databse:database@cluster0.r3dbh.mongodb.net/demo?retryWrites=true&w=majority'
 }
 appConfig.apiVersion = '/api/v1';

module.exports = {

    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion

}