# my-create-ng1
ng1的一个初始框架搭建


src/common下的/css，/font，/img，/js 都是公用的，具体模块的各自的css，js等文件放在各自的文件目录下
要特别注意路由里面的默认跳转路由的设置，目前是在hello-world.js里面设置的
css样式由于其本身是全局的  所以特别要注意不要写重名的class 样式尽可能的重复利用
也可以用gulp配置一个scss来写样式，或者也可以用webpack+es6来搭建一个配置框架（以后完善）