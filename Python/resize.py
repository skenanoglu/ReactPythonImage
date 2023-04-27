import cv2
import sys

# Resim dosyasının yolu ve ismi
resim_yolu = "../Backend/uploads/Screenshot_1.png"

width = sys.argv[1]
height = sys.argv[2]

new_size = (int(width), int(height))
print(new_size)

# Resmi yükleme
resim = cv2.imread(resim_yolu)
resized_image = cv2.resize(resim, new_size)
cv2.imwrite('resized/output.jpg', resized_image)


cv2.waitKey(0)

# Pencereyi kapatma
cv2.destroyAllWindows()