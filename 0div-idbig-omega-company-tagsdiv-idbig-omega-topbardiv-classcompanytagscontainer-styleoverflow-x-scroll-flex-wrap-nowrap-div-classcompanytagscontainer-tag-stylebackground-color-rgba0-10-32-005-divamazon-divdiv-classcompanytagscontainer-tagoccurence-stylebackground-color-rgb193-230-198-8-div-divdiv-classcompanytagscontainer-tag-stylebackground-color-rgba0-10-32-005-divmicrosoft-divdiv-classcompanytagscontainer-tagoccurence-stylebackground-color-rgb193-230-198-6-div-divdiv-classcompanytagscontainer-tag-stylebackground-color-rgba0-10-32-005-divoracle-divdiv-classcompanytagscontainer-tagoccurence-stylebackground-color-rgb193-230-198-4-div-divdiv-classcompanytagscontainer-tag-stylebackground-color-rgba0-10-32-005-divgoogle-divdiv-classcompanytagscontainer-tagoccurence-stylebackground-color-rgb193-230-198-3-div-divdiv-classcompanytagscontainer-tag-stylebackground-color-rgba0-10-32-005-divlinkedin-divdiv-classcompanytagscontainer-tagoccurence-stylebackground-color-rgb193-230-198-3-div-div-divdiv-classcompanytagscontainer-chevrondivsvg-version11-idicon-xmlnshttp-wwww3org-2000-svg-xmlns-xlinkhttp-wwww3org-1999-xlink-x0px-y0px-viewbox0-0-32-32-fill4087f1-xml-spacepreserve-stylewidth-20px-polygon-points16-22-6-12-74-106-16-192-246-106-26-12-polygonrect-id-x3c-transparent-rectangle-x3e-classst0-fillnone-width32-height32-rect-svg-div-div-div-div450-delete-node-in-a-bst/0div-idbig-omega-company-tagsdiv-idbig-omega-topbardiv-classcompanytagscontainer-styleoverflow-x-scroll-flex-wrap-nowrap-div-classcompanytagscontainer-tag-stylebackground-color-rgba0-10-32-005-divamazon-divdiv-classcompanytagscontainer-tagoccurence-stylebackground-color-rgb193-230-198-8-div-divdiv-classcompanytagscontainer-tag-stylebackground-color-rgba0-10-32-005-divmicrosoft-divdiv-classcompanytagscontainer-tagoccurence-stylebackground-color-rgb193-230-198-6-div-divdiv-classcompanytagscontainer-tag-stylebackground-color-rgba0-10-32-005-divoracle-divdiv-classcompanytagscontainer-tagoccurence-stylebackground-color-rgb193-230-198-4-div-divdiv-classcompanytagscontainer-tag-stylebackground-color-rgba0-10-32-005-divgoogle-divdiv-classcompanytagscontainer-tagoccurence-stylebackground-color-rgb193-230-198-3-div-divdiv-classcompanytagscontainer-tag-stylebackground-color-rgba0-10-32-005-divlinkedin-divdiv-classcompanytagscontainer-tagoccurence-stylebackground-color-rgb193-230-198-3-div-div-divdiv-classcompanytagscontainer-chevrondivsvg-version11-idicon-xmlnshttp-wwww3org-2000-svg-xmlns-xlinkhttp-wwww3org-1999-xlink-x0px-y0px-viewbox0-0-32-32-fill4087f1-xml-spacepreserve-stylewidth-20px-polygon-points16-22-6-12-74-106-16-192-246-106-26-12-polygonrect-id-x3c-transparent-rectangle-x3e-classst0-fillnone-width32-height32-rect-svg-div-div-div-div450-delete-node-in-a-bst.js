/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 
var deleteNode = function(root, key) {
    if (root==null) 
        return null;
    if (root.val===key){
        if (!root.left || !root.right) return root.right || root.left;
        let leftsmallest=root.left;
        while(leftsmallest.right!=null) leftsmallest=leftsmallest.right;
        leftsmallest.right=root.right;
        return root.left;
    }
    if (root.val >key){
        root.left=deleteNode(root.left,key);
        }
    else root.right= deleteNode(root.right,key);
    return root;
};
    

