import List "mo:core/List";

actor {
  let wishes = List.empty<Text>();

  public shared ({ caller }) func submitWish(text : Text) : async () {
    wishes.add(text);
  };

  public query ({ caller }) func getAllWishes() : async [Text] {
    wishes.toArray();
  };
};
