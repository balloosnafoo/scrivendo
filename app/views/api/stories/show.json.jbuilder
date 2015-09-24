json.extract! @story, :title, :description, :id, :user_id
json.tellings do
  json.array! @story.tellings do |telling|
    json.extract! telling, :title, :created_at
  end
end
