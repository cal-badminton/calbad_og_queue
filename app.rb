require 'sinatra/base'
require 'json'
require 'firebase'
require './controllers'

module CalbadOGQ
  # top-level app class
  class App < Sinatra::Base
    use CalbadOGQ::Controllers::API::Persons
    pid = Process.spawn('./node_modules/.bin/webpack-dev-server')
    Process.detach(pid)
    puts "webpack dev server pid: #{pid}"

    @base_uri = 'https://calbad-og-queue.firebaseio.com/'
    @fb_root = Firebase::Client.new(@base_uri)

    get '/' do
      erb :index
    end

    error 500 do
      erb :error
    end
  end
end
