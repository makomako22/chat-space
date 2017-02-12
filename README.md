# chatspaceデータベース設計  

## 概要  
chatspaceのデータベース設計です。  

## 作成テーブル  

chatsテーブル  

|column|type|
|:--:|:----:|
|text|text|
|image|text|
|user_id|integer|
|gruop_id|integer|  

usersテーブル  

|column|type|
|:--:|:----:|
|nickname|string|
|email|text|
|password|string|
|group_id|integer|

gruopsテーブル  

|column|type|
|:--:|:----:|
|key|string|
