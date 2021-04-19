module Types
  class MutationType < Types::BaseObject
    # TODO: remove me
    field :sign_in, mutation: Mutations::SignInMutation
    field :add_item, mutation: Mutations::AddItemMutation
    field :update_item, mutation: Mutations::UpdateItemMutation
  end
end
