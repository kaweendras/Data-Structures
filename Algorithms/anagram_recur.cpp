#include<iostream>
 
  using namespace std;
  
  void swp( string s,int k)
  {
  	   if (k == 1)
  	   {  
  	       
		 }
		else
		{ for (int j = 0; j < s.length(); j++)
{
for (int i = 0; i < s.length() - 1; i++)
{
cout << s << endl;
char t = s[i];
s[i] = s[i + 1];
s[i + 1] = t;
}
}
		    
		   swp(s,k+1) ;
		 } 
  }
  
 int main()
 {
 	
 
string s = "cat";
 swp(s,0);

  } 
