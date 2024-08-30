{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-23.11"; # or "unstable"
  
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
  ];
  
  # Sets environment variables in the workspace
  env = { };
  
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
    ];
    
    workspace = {
      # Runs when a workspace is first created with this `dev.nix` file
      onCreate = {
        npm-install = "npm ci --no-audit --prefer-offline --no-progress --timing";
        # Open editors for the following files by default, if they exist:
        default.openFiles = [ "src/App.tsx" "src/App.ts" "src/App.jsx" "src/App.js" ];
      };
      
      # Runs each time the workspace is (re)started
      onStart = {
        start-dev = "npm run dev";
      };
    };
  };
}
