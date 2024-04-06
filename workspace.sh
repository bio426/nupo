#!/bin/bash

session="nupo"

tmux new-session -d -s $session

window=1
tmux rename-window -t $session:$window 'code'
tmux send-keys -t $session:$window 'cd ~/Desktop/nupo && nvim .' C-m

window=2
tmux new-window -t $session:$window -n 'run'
tmux send-keys -t $session:$window 'cd ~/Desktop/nupo && source env.sh && npm run dev' C-m

tmux attach-session -t $session
