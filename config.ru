require './app'

Dir.glob('./{helpers,controllers}/*.rb').each { |file| require file }
Dir.glob('./controllers/api/*.rb').each { |file| require file }

run Rack::URLMap.new(
  '/' => CalbadOGQ::App.new
)
