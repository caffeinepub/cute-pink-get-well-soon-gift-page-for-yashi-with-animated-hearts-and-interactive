import List "mo:core/List";

module {
  type OldActor = {
    wishesPersisted : [Text];
    wishesBuffer : List.List<Text>;
  };

  type NewActor = {
    wishes : List.List<Text>;
  };

  public func run(old : OldActor) : NewActor {
    let newWishes = List.empty<Text>();
    newWishes.addAll(old.wishesBuffer.values());
    if (old.wishesPersisted.size() > 0) {
      newWishes.addAll(old.wishesPersisted.values());
    };
    { wishes = newWishes };
  };
};
