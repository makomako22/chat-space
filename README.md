# chatspaceデータベース設計  

## 概要  
chatspaceのデータベース設計です。  

## 作成テーブル  

chatテーブル  

|text|image|user_id|
|:--:|:--:|:--:|
|text|text|integer|  
  
userテーブル  
  
|nickname|email|password|chat_id|group_id|
|:--:|:--:|:--:|:--:|:--:|
|string|string|stirng|integer|integer|  

gruopテーブル  
  
|groupname|user_id|
|:--:|:--:|
|string|integer|