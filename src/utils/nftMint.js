import BN from "bn.js";
const gas = new BN("300000000000000");
const attachedDeposit = new BN("100000000000000000000000");

export function nft_mint(name) {
  return window.contract.nft_mint(
    {
      token_id: `${name}-nft-challenge`,
      metadata: {
        title: "Near Spring NFT Challenge",
        description: "NFT Mint",
        media:
          "https://bafybeieuocyw4bjys3qgiyvd6sxze5xngfpxttgexcj26iwe7pbicfmjw4.ipfs.dweb.link/",
      },
      receiver_id: name,
    },
    gas,
    attachedDeposit
  );
}
export function nft_tokens_for_owner(name) {
  return window.contract.nft_tokens_for_owner({ account_id: name });
}
