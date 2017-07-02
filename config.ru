require 'sinatra/base'
require './app'

Dir.glob('./{helpers,controllers}/*.rb').each { |file| require file }

map('/') { run CalbadOGQ::App }
