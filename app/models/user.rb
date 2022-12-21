class User < ApplicationRecord
    has_many :followed_users, foreign_key: :follower_id, class_name: "Relationship"
    has_many :followees, through: :followed_users, dependent: :destroy

    has_many :following_users, foreign_key: :followee_id, class_name: "Relationship"
    has_many :followers, through: :following_users, dependent: :destroy

    has_many :songs

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password, confirmation: true
    validates :password_confirmation, presence: true
    validates :email, presence: true

end
