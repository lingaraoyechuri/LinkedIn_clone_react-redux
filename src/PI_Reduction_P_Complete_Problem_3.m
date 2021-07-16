function Output=PI_Reduction_P_Complete_Problem_3(w)
%Example w='aabacca'; Output=PI_Reduction_P_Complete_Problem_3(w)
% Note that w only contains a,b and c. 
Output=[];
p='0'; q='10';r='11'
n=length(w)
for i=1:n
    if w(i)=='a'
        Output=strcat(Output,p)
    elseif w(i)=='b'
        Output=strcat(Output,q)
    else
        Output=strcat(Output,r)
    end
end

