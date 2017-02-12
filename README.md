# chatspaceデータベース設計  

## 概要  
chatspaceのデータベース設計です。  

## 作成テーブル  

chatテーブル  

|text|image|user_id|gruop_id|
|:--:|:--:|:--:|:--:|
|text|text|integer|integer|  
  
userテーブル  
  
|nickname|email|password|chat_id|group_id|
|:--:|:--:|:--:|:--:|:--:|
|string|text|stirng|integer|integer|  

gruopテーブル  
  
|groupname|
|:--:|
|string|