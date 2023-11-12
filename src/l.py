# class Solution(object):
#     def twoSum(self, nums, target):
#         EI = 0
#         ele1=nums[EI]
#         EI2=EI+1
#         ans_list=[]
        
#         ans = abs(ele1-target)
        
#         if ans in nums:
#             if  EI != nums.index(ans):
#                 ans_list.append(EI)
#                 ans_list.append(nums.index(ans))
#             else:
               
#                ele1 = nums[EI2]
#                ans_list.append(EI2)
#                ans_list.append(nums.index(ans))

#         else:
#             EI+=1    

#         return ans_list        
            
            
            
        

# obj= Solution()
# a=obj.twoSum([1,2,3,4,5],5)                
# print(a)


# class Solution(object):
#     def twoSum(self, nums, target):
       
#         ans_list=[]
        
#         for i in range(0,len(nums)):
           
#             ans = target-nums[i]
#             if ans in nums and ans != nums[i]:
                
#                     ans_list.append(i)
#                     ans_list.append(nums.index(ans))
#             else:
#                 ans = target - nums[i+1]    
#                 ans_list.append(i+1)
                # ans_list.append(nums.index(ans))
            
#             return ans_list        

# obj= Solution()
# a=obj.twoSum([3,2,3],6)                
# print(a)

# class Solution:
#     def removeElement(self,nums,value):
#         for num in nums:
#             if num == value:
#                 nums.remove(num)
#         return nums       
              

# obj= Solution()
# a=obj.removeElement([0,1,2,2,3,0,4,2],2)                
# print(type(a[1]))              


# a = [5,2,2]
# print(max(a))
import cv2
from google.colab.patches import cv2_imshow
img=cv2.imread('/content/IMG_20191029_152053.jpg')
cv2_imshow(img)