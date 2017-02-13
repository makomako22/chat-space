# chatspaceデータベース設計

## 概要
chatspaceのデータベース設計です。

## 作成テーブル

### chatsテーブル

|column|type|
|:--:|:----:|
|text|text|
|image|text|
|user_id|integer|
|gruop_id|integer|

### usersテーブル

|column|type|
|:--:|:----:|
|nickname|string|
|email|text|
|password|string|
|chat_id|integer|

### gruopsテーブル

|column|type|
|:--:|:----:|
|name|string|

### users_gruopsテーブル

|column|type|
|:--:|:----:|
|user_id|integer|
|gruops_id|integer|

## アソシエーション定義
* chat model:  
belongs_to :user  
belongs_to :gruop

* user model:  
has_many :chats  
has_many :gruops, through: :users_gruops

* gruop model:  
has_many :chats  
has_many :users, through: :users_gruops
