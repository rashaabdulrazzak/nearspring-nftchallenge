export function nft_mint(uname) {
  return window.contract.nft_mint({ name: uname });
}
