<?php

namespace App\Form;

use App\Entity\ArticleKind;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Vich\UploaderBundle\Form\Type\VichImageType;


class ArticlesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title', TextType::class)
            ->add('author', TextType::class)
            ->add('kinds', EntityType::class, [
                'label' => 'Article Type',
                'multiple' => true,
                'expanded' => true,
                'class' => ArticleKind::class
            ])
            ->add('coverImageFile', VichImageType::class)
            ->add('text', TextareaType::class)
            ->add('posted', DateType::class, [
                'widget' => 'single_text'
            ])
            ->add('save', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-success btn-55']
                ])
        ;
    }
}