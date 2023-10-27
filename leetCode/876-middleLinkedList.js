// // Given the head of a singly linked list, return the middle node of the linked list.

// // If there are two middle nodes, return the second middle node.

 

// // Example 1:


// // Input: head = [1,2,3,4,5]
// // Output: [3,4,5]
// // Explanation: The middle node of the list is node 3.
// // Example 2:


// // Input: head = [1,2,3,4,5,6]
// // Output: [4,5,6]
// // Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

// // Constraints:

// // The number of nodes in the list is in the range [1, 100].
// // 1 <= Node.val <= 100


// // this is whats considered a two pointer technique ( really cool stuff)

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

var middleNode = function(head) {
    //set both the fast & the slow to the head
    let fast= head;
    let slow= head;

//create a while loop that keeps checking the next node ensuring that neither fast nor fast.next is null 
// if either fast or fast.next is null then either a. reached the end or b. or the second last node of the list
    while( fast && fast.next){
            fast=fast.next.next; // fast is 2 steps hence the next.next
            slow= slow.next; // slow is one step ahead hence the .next
    }
    return slow; // we know that the fast node will be at the end of the list twice as fast meaning the slow node will be at the middle of the list
};