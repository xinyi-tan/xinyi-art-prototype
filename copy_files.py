import shutil
import os

# 定义路径
src_dir = r"D:\xinyi-art\src\assets"
dest_dir = r"D:\xinyi-art\public\assets"

# 确保目标目录存在
os.makedirs(dest_dir, exist_ok=True)

# 要复制的文件列表
files = [
    "mysterioustreasurechestpixelart.png",
    "MoonRabbitpixelart.png", 
    "Zhulongpixelart.png",
    "sushipixelart.png"
]

# 复制每个文件
for file in files:
    src_file = os.path.join(src_dir, file)
    dest_file = os.path.join(dest_dir, file)
    
    if os.path.exists(src_file):
        shutil.copy2(src_file, dest_file)
        print(f"已复制: {file}")
    else:
        print(f"文件不存在: {file}")

print("所有文件复制完成！")