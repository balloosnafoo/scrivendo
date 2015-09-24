json.extract! @story, :title, :description, :id, :user_id
json.tellings do
  json.array! @story.tellings do |telling|
    json.extract! telling, :title, :body, :created_at, :id
  end
end
