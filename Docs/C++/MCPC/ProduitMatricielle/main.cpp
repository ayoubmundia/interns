#include <stdio.h>
#include <stdlib.h>
#include <chrono>

using namespace std;

typedef std::chrono::high_resolution_clock Clock;
int main()
{
    long long start = PerformanceCounter();

	int i,j,k;
	int N,M,P;
	int mat[30][30],mat1[30][30],mat2[30][30];

	printf ("Donner le nombre de lignes de la premiere matrice : ");
    _flushall(); scanf ("%d",&N);
	printf ("\nDonner la dimension commune aux 2 matrices : ");
	scanf ("%d",&M);
	printf ("\nDonner le nombre de colonnes de la deuxieme matrice : ");
	scanf ("%d",&P);

	srand(0);
	int time = 1;

    //Remplissage de la premiere matrice--------------------------------------------

	printf ("\nDonner les elements de la premiere matrice :\n");
	for (i=0;i<N;i++)
	{
		for (j=0;j<M;j++,time++)
			{
			//printf ("ligne %d, colonne %d : ",i+1,j+1);
			//scanf ("%d",&mat1[i][j]);

			mat1[i][j] = rand() %10;
			srand(time);
			}
	}

    //Remplissage de la seconde matrice---------------------------------------------

	printf ("\nDonner les elements de la seconde matrice :\n");
	for (i=0;i<M;i++)
	{
		for (j=0;j<P;j++,time++)
			{
			//printf ("ligne %d, colonne %d : ",i+1,j+1);
			//scanf ("%d",&mat2[i][j]);

			mat2[i][j] = rand() %10;
			srand(time);
			}
	}

    //Initialisation de la matrice résultante---------------------------------------

	for (i=0;i<N;i++)
	{
		for (j=0;j<P;j++)
			{
				mat[i][j]=0;
			}
	}
    //Calcul de la matrice résultante-----------------------------------------------
	for (i=0;i<N;i++)
	{
		for (j=0;j<P;j++)
		{
			for (k=0;k<M;k++)
			{
				mat[i][j]=mat1[i][k]*mat2[k][j]+mat[i][j];
			}
		}
	}

    //Affichage de la matrice 1--------------------------------------------

	printf ("\nMatrice 1 :\n");
	for (i=0;i<N;i++)
	{
		for (j=0;j<P;j++)
			{
				printf ("ligne %d,colonne %d : ",i+1,j+1);
				printf ("%d\n",mat1[i][j]);
			}
	}
	//Affichage de la matrice 2--------------------------------------------

	printf ("\nMatrice 2 :\n");
	for (i=0;i<N;i++)
	{
		for (j=0;j<P;j++)
			{
				printf ("ligne %d,colonne %d : ",i+1,j+1);
				printf ("%d\n",mat2[i][j]);
			}
	}
	//Affichage de la matrice résultante--------------------------------------------

	printf ("\nProduit matriciel :\n");
	for (i=0;i<N;i++)
	{
		for (j=0;j<P;j++)
			{
				printf ("ligne %d,colonne %d : ",i+1,j+1);
				printf ("%d\n",mat[i][j]);
			}
	}



	return 0;
}
