/*
var box = new Date();			//������һ�����ڶ��󣬹��췽��������Դ�������ָ��ʱ�䣬���û�д�������Ĭ�ϵ�ǰ��ʱ��
alert(box);
*/

/*
alert(Date.parse('4/12/2007'));			//���ص���һ��������1176307200000
*/

/*
var box = new Date(Date.parse('4/12/2007'));	//�Ѻ�����ת���ɿ��Ķ���ʱ��
alert(box);		//Thu Apr 12 2007 00:00:00 GMT+0800
*/

/*
var box = new Date(1176307200000);		//ֱ�ӷ����ڵĺ�����Ҳ�ǿ��Եġ�
alert(box);
*/

/*
var box = new Date('4/12/2007');			//Ĭ���Զ���̨����Data.parse()
alert(box);
*/

/*
alert(Date.parse());		//û�д������ڸ�ʽ����������NaN

//�������Invalid Date(��Ч������)
//�ȸ践��һ�����ҵ�����
//IE����һ��NaN
var box = new Date('msdfkl 21123');	//��д�����ڸ�ʽ���᷵��Invalid Date(��Ч������)
alert(box);
*/

/*
var box = new Date('May 25, 2007');		//�ڶ���д��
alert(box);
*/

/*
var box = new Date('Thu Apr 12 2007 22:22:22 GMT+0800');	//������д��
alert(box);
*/

/*
//1��û��32�ţ�ֻ��31�ţ�������ģ����Խ���2��
//���2��1��			�������+1
//�ȸ�Invalid Date(��Ч������)
//IE2��1��
//Opera��1��30��   ��ǰ����-1
var box = new Date('January 32, 2007');
alert(box);
*/

/*
alert(Date.UTC());		//���봫����ݺ��·ݣ��������͸��ִ��󣬸�ֵ����NaN


alert(Date.UTC(2007,10));	//���غ�����
*/

/*
//UTC����Э��ʱ�䣬���ᰴ�����������׼������
var box = new Date(Date.UTC(2007, 10, 15, 17, 22, 45, 15));
alert(box);
*/

/*
//�������Date.UTC����ô�ͻ᷵�ر��ص�ʱ��
var box = new Date(2007, 10, 15, 17, 22, 45, 15);
alert(box);
*/























