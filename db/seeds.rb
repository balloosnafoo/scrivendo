# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Create user for testing
User.create(
  username: "balloo",
  password: "password"
)

# Create random users
10.times do |i|
  User.create(
    username: Faker::Internet.user_name,
    email: Faker::Internet.email,
    password: "password"
  )
end

# Create stories
50.times do |i|
  Story.create(
    title: Faker::Lorem.sentence(3),
    description: Faker::Lorem.paragraphs(2).join("\n"),
    user_id: rand(User.count) + 1
  )
end

# Create tellings
200.times do |i|
  body = (0..6).map { |_| Faker::Lorem.paragraph(10) }.join("\n")
  Telling.create(
    title: Faker::Lorem.sentence(3),
    description: Faker::Lorem.paragraphs(2).join("\n"),
    user_id: rand(User.count) + 1,
    story_id: rand(Story.count) + 1,
    body: body,
  )
end

200.times do |i|
  body = (0..2).map { |_| Faker::Lorem.paragraph(5) }.join("\n")
  Critique.create(
    body: body,
    critic_id: rand(User.count) + 1,
    telling_id: rand(Telling.count) + 1
  )
end
