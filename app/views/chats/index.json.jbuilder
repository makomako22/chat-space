json.chats @chats do |chat|
  json.name chat.user.name
  json.date chat.date
  json.text chat.text
  json.image chat.image.url
end
