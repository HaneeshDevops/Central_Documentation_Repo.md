## install git in azure linux machine without sudo permissions:
```
wget https://www.kernel.org/pub/software/scm/git/git-2.33.0.tar.gz
tar -xzvf git-2.33.0.tar.gz
cd git-2.33.0
./configure --prefix=$HOME/git
make
make install
export PATH=$HOME/git/bin:$PATH
source ~/.bashrc
git --version

```
