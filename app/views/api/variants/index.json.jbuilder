json.array! @variants do |variant|
  json.extract! variant, :id, :created_at, :description 
end
