# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all 
User.destroy_all

@ruby = User.create!(username: "ruby", email:"ruby@email.com", password: "123456")

puts "#{User.count}" user created"

@HTML = Post.create!(
  title: "HTML", 
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet. Morbi blandit cursus risus at. Blandit libero volutpat sed cras ornare arcu. Dignissim convallis aenean et tortor at risus viverra adipiscing. Fermentum posuere urna nec tincidunt praesent. Urna id volutpat lacus laoreet non curabitur. Id donec ultrices tincidunt arcu non. Rhoncus urna neque viverra justo nec ultrices. Mauris nunc congue nisi vitae suscipit. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Urna nec tincidunt praesent semper feugiat. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Faucibus et molestie ac feugiat. Suspendisse in est ante in nibh mauris. Et tortor at risus viverra adipiscing at in.", 
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fhtml5-logo-png%2Fhtml5-logo-image-logo-html-7.png&f=1&nofb=1"
  )

@CSS = Post.create!(
  title: "CSS", 
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet. Morbi blandit cursus risus at. Blandit libero volutpat sed cras ornare arcu. Dignissim convallis aenean et tortor at risus viverra adipiscing. Fermentum posuere urna nec tincidunt praesent. Urna id volutpat lacus laoreet non curabitur. Id donec ultrices tincidunt arcu non. Rhoncus urna neque viverra justo nec ultrices. Mauris nunc congue nisi vitae suscipit. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Urna nec tincidunt praesent semper feugiat. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Faucibus et molestie ac feugiat. Suspendisse in est ante in nibh mauris. Et tortor at risus viverra adipiscing at in. ", 
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.logolynx.com%2Fimages%2Flogolynx%2F8c%2F8cdf4c047e99f7389e76aa4e2e7e2803.png&f=1&nofb=1"
  )

@Javascript = Post.create!(
  title: "Javascript", 
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet. Morbi blandit cursus risus at. Blandit libero volutpat sed cras ornare arcu. Dignissim convallis aenean et tortor at risus viverra adipiscing. Fermentum posuere urna nec tincidunt praesent. Urna id volutpat lacus laoreet non curabitur. Id donec ultrices tincidunt arcu non. Rhoncus urna neque viverra justo nec ultrices. Mauris nunc congue nisi vitae suscipit. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Urna nec tincidunt praesent semper feugiat. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Faucibus et molestie ac feugiat. Suspendisse in est ante in nibh mauris. Et tortor at risus viverra adipiscing at in."
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F1200px-Unofficial_JavaScript_logo_2.svg.png&f=1&nofb=1"
  )

@Git = Post.create!(
  title: "Git", 
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet. Morbi blandit cursus risus at. Blandit libero volutpat sed cras ornare arcu. Dignissim convallis aenean et tortor at risus viverra adipiscing. Fermentum posuere urna nec tincidunt praesent. Urna id volutpat lacus laoreet non curabitur. Id donec ultrices tincidunt arcu non. Rhoncus urna neque viverra justo nec ultrices. Mauris nunc congue nisi vitae suscipit. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Urna nec tincidunt praesent semper feugiat. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Faucibus et molestie ac feugiat. Suspendisse in est ante in nibh mauris. Et tortor at risus viverra adipiscing at in.", 
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5c%2F56%2F0e%2F5c560e139fb603958c1e10433cb8108b.jpg&f=1&nofb=1"
  )

@React = Post.create!(
  title: "React", 
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet. Morbi blandit cursus risus at. Blandit libero volutpat sed cras ornare arcu. Dignissim convallis aenean et tortor at risus viverra adipiscing. Fermentum posuere urna nec tincidunt praesent. Urna id volutpat lacus laoreet non curabitur. Id donec ultrices tincidunt arcu non. Rhoncus urna neque viverra justo nec ultrices. Mauris nunc congue nisi vitae suscipit. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Urna nec tincidunt praesent semper feugiat. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Faucibus et molestie ac feugiat. Suspendisse in est ante in nibh mauris. Et tortor at risus viverra adipiscing at in.", 
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.teamtreehouse.com%2Fwp-content%2Fuploads%2F2017%2F08%2Freact-logo.png&f=1&nofb=1"
  )

@Express Framework = Post.create!(
  title: "Express Framework", 
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet. Morbi blandit cursus risus at. Blandit libero volutpat sed cras ornare arcu. Dignissim convallis aenean et tortor at risus viverra adipiscing. Fermentum posuere urna nec tincidunt praesent. Urna id volutpat lacus laoreet non curabitur. Id donec ultrices tincidunt arcu non. Rhoncus urna neque viverra justo nec ultrices. Mauris nunc congue nisi vitae suscipit. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Urna nec tincidunt praesent semper feugiat. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Faucibus et molestie ac feugiat. Suspendisse in est ante in nibh mauris. Et tortor at risus viverra adipiscing at in.", 
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F730%2F1*d2zLEjERsrs1Rzk_95QU9A.png&f=1&nofb=1"
  )

@MongoDB = Post.create!(
  title: "MongoDB", 
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet. Morbi blandit cursus risus at. Blandit libero volutpat sed cras ornare arcu. Dignissim convallis aenean et tortor at risus viverra adipiscing. Fermentum posuere urna nec tincidunt praesent. Urna id volutpat lacus laoreet non curabitur. Id donec ultrices tincidunt arcu non. Rhoncus urna neque viverra justo nec ultrices. Mauris nunc congue nisi vitae suscipit. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Urna nec tincidunt praesent semper feugiat. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Faucibus et molestie ac feugiat. Suspendisse in est ante in nibh mauris. Et tortor at risus viverra adipiscing at in.", 
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcommunity.microstrategy.com%2Fservlet%2FrtaImage%3Feid%3Dka02R000000kcTI%26feoid%3D00N44000006DfHE%26refid%3D0EM440000002Jgk&f=1&nofb=1"
  )

@Ruby on Rails = Post.create!(
  title: "Ruby on Rails", 
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet dui accumsan sit amet. Morbi blandit cursus risus at. Blandit libero volutpat sed cras ornare arcu. Dignissim convallis aenean et tortor at risus viverra adipiscing. Fermentum posuere urna nec tincidunt praesent. Urna id volutpat lacus laoreet non curabitur. Id donec ultrices tincidunt arcu non. Rhoncus urna neque viverra justo nec ultrices. Mauris nunc congue nisi vitae suscipit. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Urna nec tincidunt praesent semper feugiat. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Faucibus et molestie ac feugiat. Suspendisse in est ante in nibh mauris. Et tortor at risus viverra adipiscing at in.",
  image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fidroot.us%2Fwp-content%2Fuploads%2F2016%2F09%2Fruby_and_rails_logo.jpg&f=1&nofb=1"
  )

  puts "#{Post.count} posts created"