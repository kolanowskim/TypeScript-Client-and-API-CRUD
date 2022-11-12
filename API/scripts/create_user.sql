CREATE USER 'api_user'@'localhost' IDENTIFIED BY 'somepassword';

GRANT ALL ON JavaScriptAPI_DB.* TO 'api_user'@'localhost';
ALTER USER 'api_user'@'localhost' WITH MAX_QUERIES_PER_HOUR 90;