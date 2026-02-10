import List "mo:core/List";
import Migration "migration";

(with migration = Migration.run)
actor {
  let wishes = List.empty<Text>();

  public shared ({ caller }) func submitWish(text : Text) : async () {
    wishes.add(text);
  };

  public query ({ caller }) func getAllWishes() : async [Text] {
    wishes.toArray();
  };
};
