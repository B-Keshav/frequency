class SongsController < ApplicationController

    def attach_music(song)
        r = song.music.attach(params[:music])
        url = Rails.application.routes.url_helpers.rails_blob_url(r, only_path: true)
        url
    end

    def index
        render json: Song.all, status: :ok 
    end

    def show
    end

    def create
        # song = Song.create!(user_id: session[:user_id], title: params[:title], lyrics: params[:lyrics])
        # url = attach_music(song)
        # render json: {url: url, song: song}, status: :created
    end

end
