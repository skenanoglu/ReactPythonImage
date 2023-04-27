import cv2
import sys

resim_yolu = "../Backend/uploads/"

width = sys.argv[1]
height = sys.argv[2]
fileName = sys.argv[3]

new_size = (int(width), int(height))
print(new_size)

resim = cv2.imread(resim_yolu+fileName)
resized_image = cv2.resize(resim, new_size)
cv2.imwrite('resized/'+fileName, resized_image)

cv2.waitKey(0)

cv2.destroyAllWindows()