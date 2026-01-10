const maxSubArray = (arr) => {
    let currentSum = arr[0], max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max(arr[i],currentSum+arr[i])
        max = Math.max(currentSum, max)
    }
    return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


```At every number, ask one simple question:

❓ Should I
start a new subarray from this number
OR
continue adding it to the previous subarray?

That’s it. Nothing more.

🪜 Step-by-Step Walkthrough

We keep two variables:

currSum → sum till current index
maxSum  → best sum seen so far


Start with first element:

currSum = -2
maxSum = -2

Index 1 → 1

Ask:

Start new? → 1

Continue? → -2 + 1 = -1

👉 Choose bigger: 1

currSum = 1
maxSum = 1

Index 2 → -3

Start new? → -3

Continue? → 1 + (-3) = -2

👉 Choose -2

currSum = -2
maxSum = 1

Index 3 → 4

Start new? → 4

Continue? → -2 + 4 = 2

👉 Choose 4 (important moment!)

currSum = 4
maxSum = 4


💡 Why reset?

Because negative sum will only reduce future results.

Index 4 → -1

Start new? → -1

Continue? → 4 + (-1) = 3

👉 Choose 3

currSum = 3
maxSum = 4

Index 5 → 2

Start new? → 2

Continue? → 3 + 2 = 5

👉 Choose 5

currSum = 5
maxSum = 5

Index 6 → 1

Start new? → 1

Continue? → 5 + 1 = 6

👉 Choose 6

currSum = 6
maxSum = 6


🔥 This is the answer!
```