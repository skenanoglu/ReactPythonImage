import cv2
import sys

resim_yolu = "../Backend/uploads/"

width = sys.argv[1]
height = sys.argv[2]
fileName = sys.argv[3]
derece = sys.argv[4]
ayna = sys.argv[5]

new_size = (int(width), int(height))
print(new_size)

resim = cv2.imread(resim_yolu+fileName)
resized_image = cv2.resize(resim, new_size)

height, width = resized_image.shape[:2]
center = (width / 2, height / 2)
M = cv2.getRotationMatrix2D(center, int(derece), 1.0)
rotated_img = cv2.warpAffine(resized_image, M, (width, height))

if(ayna == 'true') : 
    rotated_img = cv2.flip(rotated_img, 1)

cv2.imwrite('resized/'+fileName, rotated_img)

cv2.waitKey(0)

cv2.destroyAllWindows()

