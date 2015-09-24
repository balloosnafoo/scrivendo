json.array! @stories do |story|
  json.extract! story, :id, :title, :description
end
