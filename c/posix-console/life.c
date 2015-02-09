/* A really messy implementation of Life in C. */
/* Cas Rusnov 2009.                                     */
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <string.h>
#define XWORLD 50
#define YWORLD 127
#define myrand(X) (1+(rand() % X))

char World[XWORLD][YWORLD];
char World2[XWORLD][YWORLD];

int main()
{
  int i, j;
  int alive;

  srandom(getpid());

  for (i=0; i<XWORLD; i++)
    for (j=0; j<YWORLD; j++)
      if (myrand(100) > 50)
	World2[i][j]=1;
      else
        World2[i][j]=0;
  printf("\e[0;0H\e[2J");
  while (1)
    {
      usleep(5500);
      printf("\e[0;0H");
      memcpy(World,World2,XWORLD*YWORLD);
      for (i=0; i<XWORLD; i++)
	for (j=0; j<YWORLD; j++)
	  {
	    alive = 0;
	    alive = alive + World[i-1][j-1];
	    alive = alive + World[i+1][j+1];
	    alive = alive + World[i+1][j-1];
	    alive = alive + World[i-1][j+1];
	    alive = alive + World[i][j+1];
	    alive = alive + World[i][j-1];
	    alive = alive + World[i+1][j];
	    alive = alive + World[i-1][j];

	    if (alive == 3)
	      World2[i][j] = 1;

	    if (alive < 2 || alive > 3)
	      World2[i][j] = 0;
	  }

      for (i=0; i<XWORLD; i++)
	{
	  for (j=0; j<YWORLD; j++)
	    {
	      if (World2[i][j])
		printf("#");
	      else
		printf(" ");
	    }
	  printf("\n");
	}
    }
}
