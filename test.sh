#!/usr/bin/env bash
total_args=$#

[[ total_args -lt 1 ]] && echo "No Component provided. Add 1 or multiple name" && exit 1

while [ $# -gt 0 ]; do
    nameComponents=$1
    fileComponents=$(find . -name "$nameComponents.tsx")

    for file in $fileComponents; do  
        sum=$((sum + 1))
    done

    echo "$nameComponents - $sum"
    shift
done

