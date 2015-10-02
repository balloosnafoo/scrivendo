# Telling information
json.extract! @telling, :id, :body, :title

# Story information
json.story do
  json.extract! @telling.story, :id, :title, :description
end

# Critiques
json.critiques do
  json.array! @telling.critiques do |critique|
    json.extract! critique, :id, :critic_id, :body
    json.username critique.critic.username
  end
end
