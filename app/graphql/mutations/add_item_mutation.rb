module Mutations
  class AddItemMutation < Mutations::BaseMutation
    argument :attributes, Types::ItemAttributes, required: true # new argument

    field :item, Types::ItemType, null: true
    field :errors, Types::ValidationErrorsType, null: true # <= change here

    def resolve(attributes:)
      check_authentication!
      item = Item.new(attributes.to_h.merge(user: context[:current_user])) # change here
      if item.save
        { item: item }
      else
        { errors: item.errors }
      end
    end
  end
end