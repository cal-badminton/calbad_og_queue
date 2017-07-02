require './app'
require 'rack-proxy'

Dir.glob('./{helpers,controllers}/*.rb').each { |file| require file }

# allows webpack and sinatra to run on the same port
class AppProxy < Rack::Proxy
  def rewrite_env(env)
    env['HTTP_HOST'] = 'localhost:8080'
    env
  end
end

run Rack::URLMap.new(
  '/' => AppProxy.new
)
