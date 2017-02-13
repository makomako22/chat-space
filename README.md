# chatspaceデータベース設計

## 概要
chatspaceのデータベース設計です。

## 作成テーブル

### chatsテーブル

|column|type|
|:--:|:----:|
|text|text (not null)|
|image|text|
|user_id|integer(foreign_key: true)|
|gruop_id|integer(foreign_key: true)|

### usersテーブル（deviseで作成）

|column|type|
|:--:|:----:|
|nickname|string (not null,add_index)|
|email|text (not null)|
|password|string (not null)|

### gruopsテーブル

|column|type|
|:--:|:----:|
|name|string (not null)|

### gruop_usersテーブル

|column|type|
|:--:|:----:|
|user_id|integer(foreign_key: true)|
|gruops_id|integer(foreign_key: true)|

## アソシエーション定義
* chat model:  
belongs_to :user  
belongs_to :gruop

* user model:  
has_many :chats  
has_many :gruops, through: :gruop_users

* gruop model:  
has_many :chats  
has_many :users, through: :gruop_users

* gruop_users:  
belongs_to :user  
belongs_to :gruop
